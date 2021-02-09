export class TimingMetrics {
  private metricName = '';
  private startName = '';
  private endName = '';
  private startTimeMs = 0;

  constructor(metricName: string) {
    this.metricName = metricName;
  }

  setStartMarker() {
    if (this.startName) {
      throw new Error('start metric already set');
    }
    this.startName = 'Begin: ' + this.metricName;
    this.startTimeMs = new Date().getTime();
    performance.mark(this.startName);
  }

  setEndMarker() {
    if (!this.startName) {
      throw new Error('start metric not set');
    }

    if (this.endName) {
      throw new Error('end metric already set');
    }
    this.endName = 'End: ' + this.metricName;
    performance.mark(this.endName);
    performance.measure(this.metricName, this.startName, this.endName);
    console.log(`${this.metricName} = ${new Date().getTime() - this.startTimeMs}ms`);
    performance.clearResourceTimings();
  }
}
