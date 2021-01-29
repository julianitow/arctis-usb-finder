export default interface SimpleHeadphone {
  batteryPercent: number;
  modelName: string;
  isMuted: boolean | undefined;
  isConnected: boolean | undefined;
  isCharging: boolean | undefined;
  isDischarging: boolean | undefined;

  // eslint-disable-next-line semi
}
