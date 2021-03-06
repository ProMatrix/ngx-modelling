export declare class TimingMetrics {
    private metricName;
    private startName;
    private endName;
    private capturedMetric;
    private timerId;
    private startTimeMs;
    constructor(metricName: string);
    setStartMarker(): void;
    setEndMarker(): void;
    measureInterval(): number;
}
