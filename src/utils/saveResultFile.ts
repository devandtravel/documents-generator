import { TemplateData, TemplateHandler } from 'easy-template-x'

export const saveResultFile = async (templateContent: TemplateData) => {
  const request = await fetch(
    '/files/client-documents/02.11.2021г. ДДУ (рассрочка).docx'
  )
  const blobUrl = URL.createObjectURL(
    await new TemplateHandler().process(await request.blob(), templateContent)
  )
  let link = document.createElement('a')
  link.download = 'Готовый документ.docx'
  link.href = blobUrl
  document.body.appendChild(link)
  link.click()
  setTimeout(() => {
    link.remove()
    window.URL.revokeObjectURL(blobUrl)
    link = null as unknown as HTMLAnchorElement
  }, 0)
}
