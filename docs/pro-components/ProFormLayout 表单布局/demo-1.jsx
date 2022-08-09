import React from 'react';
import { ProFormLayout, Form, Input } from 'blued';

export default () => {
  return (
    <Form>
      <ProFormLayout columnNumber={4} gutter={16}>
        <Form.Item
          label="查询条件1"
          name="condition1"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="查询条件2"
          name="condition2"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="查询条件3"
          name="condition3"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="查询条件4"
          name="condition4"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="查询条件5"
          name="condition5"
        >
          <Input />
        </Form.Item>
      </ProFormLayout>
    </Form>
  );
};
