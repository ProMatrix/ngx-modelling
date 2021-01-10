export class Performance {
    date = new Date();
    responseTime = 0;
    dateString = '';
    timeString = '';
}

export class AnalyticsData {
    performances = Array<Performance>();
    averageResponseTime = 0;
}
