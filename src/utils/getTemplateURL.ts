export const getTemplateURL = async (
  inputURL = '/files/client-documents/02.11.2021г. ДДУ (рассрочка).docx'
) => URL.createObjectURL(await (await fetch(inputURL)).blob())
