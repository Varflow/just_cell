<template>
  <div class="dropzone-container">
    <div v-bind="getRootProps()" class="dropzone-content">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Перетягніть файли сюди ...</p>
      <p v-else class="dropzone-hint">
        Перетягніть файли сюди, або натисніть щоб обрати файли
      </p>
    </div>
    <div class="dropzone-preview">
      <div
        v-for="file in acceptedFiles"
        :key="file.file.name"
        class="dropzone-preview-item"
      >
        <img :src="file.preview" alt="file" class="dropzone-preview-image" />
        <img
          src="@/assets/icons/trash.svg"
          class="dropzone-preview__delete"
          alt="delete"
          @click="() => onDeleteFile(file.file)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useDropzone } from "vue3-dropzone";

type FilePreview = {
  file: File;
  preview: string;
};

const acceptedFiles = reactive<FilePreview[]>([]);

const onDrop = (acceptFiles) => {
  // make accepted files available for preview
  const files = acceptFiles.map((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      acceptedFiles.push({ file, preview: reader.result as string });
    };
  });

  console.log(files);
  acceptFiles.push([...files]);
};

const onDeleteFile = (file: File) => {
  const index = acceptedFiles.findIndex((f) => f.file === file);
  acceptedFiles.splice(index, 1);
};

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
});
</script>

<style scoped lang="scss">
.dropzone-container {
  width: 100%;
}

.dropzone-content {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 60px 0;
  border: 2px dashed #c7c7c7;
  border-radius: 10px;
  cursor: pointer;
}

.dropzone-hint {
  font-size: 16px;
  color: #c7c7c7;
}

.dropzone-preview {
  display: flex;
  column-gap: 12px;
  margin-top: 12px;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 100px;
    height: 100px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid $accent-primary;

    cursor: pointer;

    &:hover {
      .dropzone-preview__delete {
        opacity: 1;
      }
    }
  }
  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__delete {
    position: absolute;
    cursor: pointer;
    opacity: 0;

    width: 24px;
    height: 24px;
  }
}
</style>
