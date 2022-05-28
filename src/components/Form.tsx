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
  const [visibleBlue, setVisibleBlue] = useState(true)
  const [visibleGreen, setVisibleGreen] = useState(true)

  const onFinish = async (values: any) => {
    const templateContent = {
      ...values,
      ...staticContent,
      visibility: [{ visibleBlue: visibleBlue }, { visibleGreen: visibleGreen }]
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
        <Form.Item label={'visibleBlue'} style={{ width: 500 }}>
          <Switch
            style={{ alignSelf: 'flex-end' }}
            onChange={() => setVisibleBlue(!visibleBlue)}
            checkedChildren="ВКЛ"
            unCheckedChildren="ВЫКЛ"
            defaultChecked
          />
        </Form.Item>
        <Form.Item label={'visibleGreen'} style={{ width: 500 }}>
          <Switch
            style={{ alignSelf: 'flex-end' }}
            onChange={() => setVisibleGreen(!visibleBlue)}
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
