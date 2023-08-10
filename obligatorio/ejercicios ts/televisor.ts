class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 0, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(): void {
      if (this.isOn)
        if (this.volume + 1 <= 100)
          this.volume ++;
      console.log("vol up");
    }
    volDown(): void {
      if (this.isOn)
        if (this.volume - 1 >= 0)
          this.volume = this.volume - 1;
      console.log("vol down");
    }
    channelUp(): void {
      if (this.isOn)
        if (this.channel + 1 <= 99)
          this.channel ++;
      console.log("channel up");
    }
    channelDown(): void {
      if (this.isOn)
        if (this.channel - 1 >= 1)
          this.channel = this.channel + 1;
      console.log("channel down");
    }
    pickChannel(channel: number): void {
      if (!this.isOn) return;
      this.channel = channel;
      console.log("Cambiaste al canal", this.channel);
    }
    info(): void {
      console.log("Canal", this.channel);
      console.log("Volumen",this.volume);
    }
  }
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.switchOnOff();
  tv01.switchOnOff();
  //tv01.pickChannel(45);
  tv01.info;