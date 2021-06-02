export declare class TimingMetrics {
    private metricName;
    private startName;
    private endName;
    private startTimeMs;
    constructor(metricName: string);
    setStartMarker(): void;
    setEndMarker(): void;
}
