export class Dependency {
    key = '';
    value = '';
}

export class TextMessage {
    message = '';
    cellCarrierName = '';
    mobileNumber = 0;
    emailAddress? = '';
}

export class CellCarrier {
    name = '';
    smsProfile = '';
}

export class ApiVersions {
    buildVersion = '';
    typeScript = '';
    nodeJs = '';
    v8Engine = '';
    angular = '';
    rxJs = '';
    moment = '';
    coreJs = '';
    zoneJs = '';
    googleMaps = '';
}

export class AppSettings {
    debug = false;
    testing = false;
    connectionString = '';
    buildVersion = '';
    splashTime = 0;
    googleMapKey = '';
    smtpReply = '';
    smtpHost = '';
    smtpPort = 0;
    smtpUn = '';
    smtpPw = '';
    cellCarriers = '';
    aspNetCoreVersion = '';
    smsFrom = '';
    smsPw = '';
    smsForward = '';
    apiVersions = new ApiVersions();
}


export enum BuildTypes {
    native,
    pwa,
    popup,
    tab
}

export class AngularProject {
    name = '';
    buildEnabled = false;
    buildType = BuildTypes.native;
    production = false;
    distFolder = '';
    angularModule = '';
    angularRoot = '';
    angularProjectDir = '';
    showPanel = false;
}

// TODO Do we still need this?
export class LaunchSettings {
    iisSettings = {
        iisExpress: {
            applicationUrl: ''
        }
    };
    profiles = {

    };
}

export class DeveloperSettings {
    machineName = '';
    executeDist = false;
    executeTest = false;
    serveApp = '';
    releaseApp = '';
    workspaceFolder = '';
    appFolder = '';
    appVersionType = '';
    angularProjects = Array<AngularProject>();
}

export class VisualProject {
    name = '';
    developerSettings = new DeveloperSettings();
    showPanel = false;
    showVersion = true;
}

export class BuildConfiguration {
    machineName = '';
    visualProject = new VisualProject();
}

export class BuildResponse {
    payloadType = '';
    versionNo = '';
}

export class NgProject {
    root = '';
    sourceRoot = '';
    projectType = '';
}

export class NgWorkspace {
    projects = Array<NgProject>();
}
