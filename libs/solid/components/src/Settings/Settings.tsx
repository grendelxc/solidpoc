import { lazy, Suspense } from 'solid-js';
import { createStore } from 'solid-js/store';

import { getStuffNThings } from '@solidpoc/solid-utils';

import { InputField } from "../InputField/InputField";

export type UserSettingsStore = {
  first: string;
  last: string;
  id: string;
}

const mockData = {
  data1: 'd1',
  data2: 'd2'
}

export function Settings() {
  // const [settings, setSettings] = createStore<UserSettingsStore>({
  //   first: '',
  //   last: '',
  //   id: ''
  // });

  // const [data, { mutate, refetch }] = getStuffNThings({ timeout: 5000, mockData }, { deferStream: true });
  // const result = data();

  return (
    <div>
      <h3>Settings</h3>
      {/* <div>{JSON.stringify(Object.entries(data || {}))}</div> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <div>This is the data: {JSON.stringify(data())}</div>
        <div>What about this?: {JSON.stringify(data())}</div>
      </Suspense> */}

      {/* <div>
        {settings.id} : {settings.first} {settings.last}
      </div>
      <InputField label='first name' value={settings.first} setValue={(v: string) => setSettings('first', v) } />
      <InputField label='last name' value={settings.last} setValue={(v: string) => setSettings("last", v) } />
      <InputField label='id' value={settings.id} setValue={(v: string) => setSettings('id', v) } /> */}
    </div>
  )
}