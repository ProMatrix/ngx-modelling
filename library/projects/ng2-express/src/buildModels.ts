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

export class E2ETask {
    action = '';
    query? = '';
    value? = '';
    wait? = 0;
}

export class E2ETest {
    name = '';
    url = '';
    dist = '';
    action = '';
    enabled = false;
    snapshotPath = '';
    testMatch? = Array <string>();
    headless? = false;
    autoClose? = true;
    server? = '';
    defaultViewport? = null;
    errorTimeout? = null;
}

export class AngularProject {
    name = '';
    lintEnabled = false;
    buildEnabled = false;
    uTestEnabled = false;
    eTestEnabled = false;
    publishEnabled = false;
    ciCdEnabled = false;
    buildType = BuildTypes.native;
    production = false;
    distFolder = '';
    angularModule = '';
    angularRoot = '';
    angularProjectDir = '';
    showPanel = false;
    ngBuildProcess = new NgProcess();
    ngLintProcess = new NgProcess();
    ngUtestProcess = new NgProcess();
    ngEtestProcess = new NgProcess();
    ngPublishProcess = new NgProcess();
    ngCiCdProcess = new NgProcess();
    npmScript = '';
    e2ETests = Array <E2ETest>();
}

export class NgProcess {
    processing = false;
    showStatus = false;
    completed = false;
    succeeded = false;
    statusMessage = '';
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
