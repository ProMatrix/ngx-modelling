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
export declare class AngularProject {
    name: string;
    buildEnabled: boolean;
    buildType: BuildTypes;
    production: boolean;
    distFolder: string;
    angularModule: string;
    angularRoot: string;
    angularProjectDir: string;
    showPanel: boolean;
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
    consoleText: string;
    versionNo: string;
}
