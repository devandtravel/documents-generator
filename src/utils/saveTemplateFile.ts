export const saveTemplateFile = async () => {
  const request = await fetch(
    '/files/client-documents/02.11.2021г. ДДУ (рассрочка).docx'
  )
  const blobUrl = URL.createObjectURL(await request.blob())
  let link = document.createElement('a')
  link.download = 'Шаблон.docx'
  link.href = blobUrl
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    link.remove()
    window.URL.revokeObjectURL(blobUrl)
    link = null as unknown as HTMLAnchorElement
  }, 0)
}
