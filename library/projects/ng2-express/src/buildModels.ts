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
    firebase = '';
    angularFire = '';
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

export class UatTest {
    name = '';
    url = '';
    dist = '';
    action = '';
    actions? = '';
    enabled = false;
    snapshotPath = '';
    testMatch? = Array <string>();
    headless? = false;
    autoClose? = true;
    server? = '';
    host? = '';
    defaultViewport? = null;
    errorTimeout? = null;
    goldenSnapshots? = Array <string>();
    testingSnapshots? = Array <string>();
    deltaSnapshots? = Array <string>();
    snapshotDisplayed = '';
}

export class AngularProject {
    name: string;
    lintEnabled: boolean;
    buildEnabled: boolean;
    uTestEnabled: boolean;
    eTestEnabled: boolean;
    aTestEnabled: boolean;
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
    environmentArt: string;
    ngBuildProcess: NgProcess;
    ngLintProcess: NgProcess;
    ngUtestProcess: NgProcess;
    ngEtestProcess: NgProcess;
    ngAtestProcess: NgProcess;
    ngPublishProcess: NgProcess;
    ngCiCdProcess: NgProcess;
    npmScript: string;
    uatTests: UatTest[];
}

export class NgProcess {
    processing = false;
    showStatus = false;
    completed = false;
    succeeded = false;
    statusMessage = '';
    processInfoType = '';
    processInfoMessage = '';
    runtimeScript01 = '';
    runtimeScript02 = '';
    npmScripts = Array <string>();
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
    e2eTestFolder = '';
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
    versionNo? = '';
    statusMessage = '';
}

// TODO
export class NgProject {
    root = '';
    sourceRoot = '';
    projectType = '';
}

// TODO
export class NgWorkspace {
    projects = Array<NgProject>();
}
