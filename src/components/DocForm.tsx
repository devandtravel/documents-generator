import { Form, Button, Switch, Divider } from 'antd'
import { TextInput } from './TextInput'
import { saveResultFile } from '../utils/saveResultFile'
import { inputTestData } from '../data/inputTestData'
import { useState } from 'react'
import ReactJson from 'react-json-view'
import { saveTemplateFile } from '../utils/saveTemplateFile'

export const DocForm = () => {
  const [form] = Form.useForm()
  const { editableContent, staticContent } = inputTestData
  const [visiblePaymentSimple, setVisiblePaymentSimple] = useState(true)
  const [visiblePaymentCredit, setVisiblePaymentCredit] = useState(true)
  const [visiblePaymentSber, setVisiblePaymentSber] = useState(true)

  const onFinish = async (values: any) => {
    const templateContent = {
      ...values,
      ...staticContent,
      visiblePaymentSimple: visiblePaymentSimple,
      visiblePaymentCredit: visiblePaymentCredit,
      visiblePaymentSber: visiblePaymentSber
    }
    try {
      saveResultFile(templateContent)
    } catch (error) {
      console.error(error)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Form
        form={form}
        style={{ padding: '10px', marginLeft: '50px' }}
        labelCol={{ span: 8 }}
        initialValues={editableContent}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {Object.keys(editableContent).map((name) => (
          <TextInput name={name} key={name} />
        ))}

        <Divider />
        {'Оплата по договору осуществляется:'}
        <Form.Item
          label={'Гос. регистрация'}
          style={{ marginTop: 10, width: 500 }}
        >
          <Switch
            style={{ alignSelf: 'flex-end' }}
            onChange={() => setVisiblePaymentSimple(!visiblePaymentSimple)}
            checkedChildren="ВКЛ"
            unCheckedChildren="ВЫКЛ"
            defaultChecked
          />
        </Form.Item>
        <Form.Item label={'Аккредитивная форма'} style={{ width: 500 }}>
          <Switch
            style={{ alignSelf: 'flex-end' }}
            onChange={() => setVisiblePaymentCredit(!visiblePaymentCredit)}
            checkedChildren="ВКЛ"
            unCheckedChildren="ВЫКЛ"
            defaultChecked
          />
        </Form.Item>
        <Form.Item label={'Сервис от Сбера'} style={{ width: 500 }}>
          <Switch
            style={{ alignSelf: 'flex-end' }}
            onChange={() => setVisiblePaymentSber(!visiblePaymentSber)}
            checkedChildren="ВКЛ"
            unCheckedChildren="ВЫКЛ"
            defaultChecked
          />
        </Form.Item>

        <Divider />
        <Form.Item
          label={
            <Button type="default" onClick={saveTemplateFile}>
              Шаблон
            </Button>
          }
          style={{ width: 500 }}
        >
          <Button type="primary" htmlType="submit">
            Готовый документ
          </Button>
        </Form.Item>
      </Form>
      <ReactJson
        collapsed={2}
        src={inputTestData}
        name={`ДАННЫЕ ДЛЯ ЗАПОЛНЕНИЯ ШАБЛОНА`}
        displayDataTypes={false}
        displayObjectSize={false}
        sortKeys={true}
        groupArraysAfterLength={1000}
        indentWidth={4}
        style={{ padding: '10px', marginLeft: '50px' }}
        collapseStringsAfterLength={80}
        enableClipboard={false}
      />
    </div>
  )
}
