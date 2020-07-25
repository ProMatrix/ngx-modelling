import { TaskNpmPublish } from '../../project-control';

export class PrePush {

    constructor() {
      try {
        
        const noop = new TaskNpmPublish(false, 'ngx-modelling', 'npm', '..\\..\\NgResources\\ngx-modelling', 'library', 'projects\\ng2-express\\dist', '..\\..\\NgResources\\project-control,..\\..\\NgResources\\ngx-api-services,..\\..\\Angular.Fire.Studio.10\\studio.app', 'package-ng2-express');
            // we can only see the console.log is the process.exit(1);
            // process.exit(1);
        } catch (e) {
            console.error(e.message);
            process.exit(1);
        }
    }
}
new PrePush();
