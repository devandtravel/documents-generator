import { Form, Input } from 'antd'

type TextInputProps = {
  name: string
}

export const TextInput = ({ name }: TextInputProps) => (
  <Form.Item label={name} name={name} style={{ width: 500 }}>
    <Input />
  </Form.Item>
)
