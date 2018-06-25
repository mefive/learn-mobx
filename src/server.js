import devicesJson from './mock/devices';

function sleep(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

export async function getUser() {
  await sleep(300);

  return {
    name: 'mefive',
    age: 32,
  };
}

export async function getDevices() {
  await sleep(300);

  return JSON.parse(devicesJson);
}
