export declare class Dependency {
    key: string;
    value: string;
}
export declare class TextMessage {
    message: string;
    cellCarrierName: string;
    mobileNumber: number;
    emailAddress?: string;
}
export declare class CellCarrier {
    name: string;
    smsProfile: string;
}
export declare class ApiVersions {
    buildVersion: string;
    typeScript: string;
    nodeJs: string;
    v8Engine: string;
    angular: string;
    rxJs: string;
    moment: string;
    coreJs: string;
    zoneJs: string;
    googleMaps: string;
}
export declare class AppSettings {
    debug: boolean;
    testing: boolean;
    connectionString: string;
    buildVersion: string;
    splashTime: number;
    googleMapKey: string;
    smtpReply: string;
    smtpHost: string;
    smtpPort: number;
    smtpUn: string;
    smtpPw: string;
    cellCarriers: string;
    aspNetCoreVersion: string;
    smsFrom: string;
    smsPw: string;
    smsForward: string;
    apiVersions: ApiVersions;
}
export declare enum BuildTypes {
    native = 0,
    pwa = 1,
    popup = 2,
    tab = 3
}
export declare class E2ETask {
    action: string;
    query?: string;
    value?: string;
    wait?: number;
}
export declare class E2ETest {
    name: string;
    url: string;
    dist: string;
    action: string;
    actions?: string;
    enabled: boolean;
    snapshotPath: string;
    testMatch?: string[];
    headless?: boolean;
    autoClose?: boolean;
    server?: string;
    host?: string;
    defaultViewport?: any;
    errorTimeout?: any;
}
export declare class AngularProject {
    name: string;
    lintEnabled: boolean;
    buildEnabled: boolean;
    uTestEnabled: boolean;
    eTestEnabled: boolean;
    publishEnabled: boolean;
    ciCdEnabled: boolean;
    buildType: BuildTypes;
    production: boolean;
    distFolder: string;
    angularModule: string;
    angularRoot: string;
    angularProjectDir: string;
    showPanel: boolean;
    launchProdScript: string;
    launchUatScript: string;
    launchUutScript: string;
    environmentCwd: string;
    ngBuildProcess: NgProcess;
    ngLintProcess: NgProcess;
    ngUtestProcess: NgProcess;
    ngEtestProcess: NgProcess;
    ngPublishProcess: NgProcess;
    ngCiCdProcess: NgProcess;
    npmScript: string;
    e2ETests: E2ETest[];
}
export declare class NgProcess {
    processing: boolean;
    showStatus: boolean;
    completed: boolean;
    succeeded: boolean;
    statusMessage: string;
    processInfoType: string;
    processInfoMessage: string;
    runtimeScript01: string;
    runtimeScript02: string;
    npmScripts: string[];
}
export declare class LaunchSettings {
    iisSettings: {
        iisExpress: {
            applicationUrl: string;
        };
    };
    profiles: {};
}
export declare class DeveloperSettings {
    machineName: string;
    executeDist: boolean;
    executeTest: boolean;
    serveApp: string;
    releaseApp: string;
    workspaceFolder: string;
    appFolder: string;
    e2eTestFolder: string;
    appVersionType: string;
    angularProjects: AngularProject[];
}
export declare class VisualProject {
    name: string;
    developerSettings: DeveloperSettings;
    showPanel: boolean;
    showVersion: boolean;
}
export declare class BuildConfiguration {
    machineName: string;
    visualProject: VisualProject;
}
export declare class BuildResponse {
    payloadType: string;
    versionNo?: string;
    statusMessage: string;
}
export declare class NgProject {
    root: string;
    sourceRoot: string;
    projectType: string;
}
export declare class NgWorkspace {
    projects: NgProject[];
}
