<template>
  <main class="p-4 my-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 text-center text-gray-900">Convertir Documento a PDF</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3 w-full">
        <label for="file" class="block text-left font-medium text-gray-700">Documento</label>
        <input
          type="file"
          id="file"
          ref="fileRef"
          accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div class="w-full">
        <label for="extension" class="block text-left font-medium text-gray-700">Formato</label>
        <select
          v-model="extension"
          id="extension"
          class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option />
          <option value="pdf">PDF</option>
        </select>
      </div>

      <button
        :disabled="busy"
        type="submit"
        class="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg
          v-if="busy"
          class="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>

        <CheckIcon v-else class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        <span class="font-semibold">Convertir</span>
        <!-- <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /> -->
        <!-- <ArrowCircleRight class="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" /> -->
      </button>
    </form>
  </main>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { convertServer } from './config'
import { CheckIcon } from '@heroicons/vue/outline'
import { saveAs } from 'file-saver'

const fileRef = ref(null)
const extension = ref('')
const busy = ref(false)

const indexOfExtension = (filename) => {
  if (!filename) return -1;
  const extensionPos = filename.lastIndexOf('.')
  const lastSeparator = filename.lastIndexOf('/')

  return lastSeparator > extensionPos ? -1 : extensionPos
}

const removeExtension = (filename) => {
  if (!filename) return null;
  const index = indexOfExtension(filename);
  return index === -1 ? '' : filename.substring(0, index)
}

async function submitForm() {
  try {
    busy.value = true
    const fileElm = fileRef.value
    const file = fileElm.files[0];
    const url = `${convertServer}/${extension.value}`
    console.table({ file, url })
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    })

    const basename = removeExtension(file.name)
    const filename = `${basename}.${extension.value}`

    const blob = await resp.blob()
    saveAs(blob, filename)

    fileElm.value = ''
    extension.value = ''
  } catch (err) {
    alert(err)
  } finally {
    busy.value = false
  }
}
</script>
