import { TsHelperOption } from 'egg-ts-helper';

interface PackageInfo {
  /** egg plugin info */
  eggPlugin: {
    /** egg plugin name */
    name: string;
    /** optional dependencies */
    optionalDependencies: string[];
  };

  /** egg config */
  egg: {
    /** framework name */
    framework: string;
    /** whether use typescript mode, only works with egg-bin */
    typescript: boolean;
    /** whether create d.ts automatically, only works with egg-bin */
    declarations: boolean;
    /** require some module in startup, like `--require` in node, only works with egg-bin */
    require: string[];
    /** tsHelper options, only works with egg.declarations = true */
    tsHelper: {
      /** tsHelper typings dir, default to {process.cwd()}/typings */
      typings?: TsHelperOption['typings'];
      /** tsHelper watcher configuration */
      watchDirs?: TsHelperOption['watchDirs'];
      /** tsHelper caseStyle for generator, default to lower */
      caseStyle?: string;
      /** tsHelper watcher options, will pass to chokidar */
      watchOptions?: TsHelperOption['watchOptions'];
      /** tsHelper config file url, default to {process.cwd()}/tshelper.json or {process.cwd()}/tshelper.js */
      configFile?: TsHelperOption['configFile'];
      /** make tsHelper silent, default to false */
      silent?: TsHelperOption['silent'];
    };
  };
}
