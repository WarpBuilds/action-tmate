/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 838:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 766:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 71:
/***/ ((module) => {

module.exports = eval("require")("@actions/tool-cache");


/***/ }),

/***/ 623:
/***/ ((module) => {

module.exports = eval("require")("@octokit/rest");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "os"
const external_os_namespaceObject = require("os");
var external_os_default = /*#__PURE__*/__nccwpck_require__.n(external_os_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__nccwpck_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__nccwpck_require__.n(external_path_namespaceObject);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(838);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/github
var github = __nccwpck_require__(766);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/tool-cache
var tool_cache = __nccwpck_require__(71);
// EXTERNAL MODULE: ../../../../../opt/homebrew/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@octokit/rest
var rest = __nccwpck_require__(623);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: ./src/helpers.js
// @ts-check






/**
 * @returns {boolean}
 */
const useSudoPrefix = () => {
  const input = core.getInput("sudo");
  return input === "auto" ? external_os_default().userInfo().uid !== 0 : input === "true";
};

/**
 * @param {string} cmd
 * @param {{quiet: boolean} | undefined} [options]
 * @returns {Promise<string>}
 */
const execShellCommand = (cmd, options) => {
  core.debug(`Executing shell command: [${cmd}]`);
  return new Promise((resolve, reject) => {
    const proc =
      process.platform !== "win32"
        ? (0,external_child_process_namespaceObject.spawn)(cmd, [], {
            shell: true,
            env: {
              ...process.env,
              HOMEBREW_GITHUB_API_TOKEN:
                core.getInput("github-token") || undefined,
            },
          })
        : (0,external_child_process_namespaceObject.spawn)("C:\\msys64\\usr\\bin\\bash.exe", ["-lc", cmd], {
            env: {
              ...process.env,
              MSYS2_PATH_TYPE: "inherit" /* Inherit previous path */,
              CHERE_INVOKING: "1" /* do not `cd` to home */,
              MSYSTEM:
                "MINGW64" /* include the MINGW programs in C:/msys64/mingw64/bin/ */,
            },
          });
    let stdout = "";
    proc.stdout.on("data", (data) => {
      if (!options || !options.quiet) process.stdout.write(data);
      stdout += data.toString();
    });

    proc.stderr.on("data", (data) => {
      process.stderr.write(data);
    });

    proc.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(code ? code.toString() : undefined));
      }
      resolve(stdout.trim());
    });
  });
};

/**
 * @param {string} key
 * @param {RegExp} re regex to use for validation
 * @return {string} {undefined} or throws an error if input doesn't match regex
 */
const getValidatedInput = (key, re) => {
  const value = core.getInput(key);
  if (value !== undefined && !re.test(value)) {
    throw new Error(`Invalid value for '${key}': '${value}'`);
  }
  return value;
};

/**
 * @return {Promise<string>}
 */
const getLinuxDistro = async () => {
  try {
    const osRelease = await external_fs_default().promises.readFile("/etc/os-release");
    const match = osRelease.toString().match(/^ID=(.+)$/m);
    return match ? match[1] : "(unknown)";
  } catch (e) {
    return "(unknown)";
  }
};

// Ref: https://github.com/LouisBrunner/checks-action/

const prEvents = [
  "pull_request",
  "pull_request_review",
  "pull_request_review_comment",
  "pull_request_target",
];

const getSHA = (inputSHA) => {
  let sha = github.context.sha;
  if (prEvents.includes(github.context.eventName)) {
    const pull = github.context.payload.pull_request;
    if (pull?.head.sha) {
      sha = pull?.head.sha;
    }
  }
  if (inputSHA) {
    sha = inputSHA;
  }
  return sha;
};

const formatDate = () => {
  return new Date().toISOString();
};

const unpackInputs = (title, inputs) => {
  let output;
  if (inputs.output) {
    output = {
      title: inputs.output.title ?? title,
      summary: inputs.output.summary,
      text: inputs.output.text_description,
      actions: inputs.actions,
      annotations: inputs.annotations,
      images: inputs.images,
    };
  }

  let details_url;

  if (inputs.conclusion === "action_required" || inputs.actions) {
    if (inputs.detailsURL) {
      const reasonList = [];
      if (inputs.conclusion === "action_required") {
        reasonList.push(`'conclusion' is 'action_required'`);
      }
      if (inputs.actions) {
        reasonList.push(`'actions' was provided`);
      }
      const reasons = reasonList.join(" and ");
      core.info(
        `'details_url' was ignored in favor of 'action_url' because ${reasons} (see documentation for details)`
      );
    }
    details_url = inputs.actionURL;
  } else if (inputs.detailsURL) {
    details_url = inputs.detailsURL;
  }

  return {
    status: inputs.status.toString(),
    output,
    actions: inputs.actions,
    conclusion: inputs.conclusion ? inputs.conclusion.toString() : undefined,
    completed_at: inputs.status === "completed" ? formatDate() : undefined,
    details_url,
  };
};

const createRun = async (octokit, name, sha, ownership, inputs) => {
  try {
    const { data } = await octokit.rest.checks.create({
      ...ownership,
      head_sha: sha,
      name: name,
      started_at: formatDate(),
      ...unpackInputs(name, inputs),
    });
    return data.id;
  } catch (error) {
    core.error(error);
    // Do not fail the action if check creation fails
    return "";
  }
};

const updateRun = async (octokit, id, ownership, inputs) => {
  try {
    const previous = await octokit.rest.checks.get({
      ...ownership,
      check_run_id: id,
    });
    await octokit.rest.checks.update({
      ...ownership,
      check_run_id: id,
      ...unpackInputs(previous.data.name, inputs),
    });
  } catch (error) {
    core.error(error);
    // Do not fail the action if check update fails
  }
};

;// CONCATENATED MODULE: ./src/index.js
// @ts-check










const TMATE_LINUX_VERSION = "2.4.0";

// Map os.arch() values to the architectures in tmate release binary filenames.
// Possible os.arch() values documented here:
// https://nodejs.org/api/os.html#os_os_arch
// Available tmate binaries listed here:
// https://github.com/tmate-io/tmate/releases/
const TMATE_ARCH_MAP = {
  arm64: "arm64v8",
  x64: "amd64",
};

/** @param {number} ms */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  try {
    /*  Indicates whether the POST action is running */
    if (!!core.getState("isPost")) {
      const message = core.getState("message");
      const tmate = core.getState("tmate");
      const authToken = core.getState("authToken");
      const runCheckID = core.getState("runCheckID");
      if (tmate && message) {
        const shutdown = async () => {
          core.error("Got signal");
          await execShellCommand(`${tmate} kill-session`);
          process.exit(1);
        };
        // This is needed to fully support canceling the post-job Action, for details see
        // https://docs.github.com/en/actions/managing-workflow-runs/canceling-a-workflow#steps-github-takes-to-cancel-a-workflow-run
        process.on("SIGINT", shutdown);
        process.on("SIGTERM", shutdown);
        core.debug("Waiting");
        const hasAnyoneConnectedYet = (() => {
          let result = false;
          return async () => {
            return result ||=
              !didTmateQuit()
              && '0' !== await execShellCommand(`${tmate} display -p '#{tmate_num_clients}'`, { quiet: true })
          }
        })()

        let connectTimeoutSeconds = parseInt(core.getInput("connect-timeout-seconds"))
        if (Number.isNaN(connectTimeoutSeconds) || connectTimeoutSeconds <= 0) {
          connectTimeoutSeconds = 10 * 60
        }

        for (let seconds = connectTimeoutSeconds; seconds > 0; ) {
          console.log(`${
            await hasAnyoneConnectedYet()
            ? 'Waiting for session to end'
            : `Waiting for client to connect (at most ${seconds} more second(s))`
          }\n${message}`)

          if (continueFileExists()) {
            core.info(
              "Exiting debugging session because the continue file was created"
            );
            await updateRunCheckPostTmateDisconnect(authToken, runCheckID);
            break;
          }

          if (didTmateQuit()) {
            core.info("Exiting debugging session 'tmate' quit");
            await updateRunCheckPostTmateDisconnect(authToken, runCheckID);
            break;
          }

          await sleep(5000);
          if (!(await hasAnyoneConnectedYet())) seconds -= 5;
        }
      }
      return;
    }

    let tmateExecutable = "tmate";
    if (core.getInput("install-dependencies") !== "false") {
      core.debug("Installing dependencies");
      if (process.platform === "darwin") {
        await execShellCommand("brew install tmate");
      } else if (process.platform === "win32") {
        await execShellCommand("pacman -S --noconfirm tmate");
      } else {
        const optionalSudoPrefix = useSudoPrefix() ? "sudo " : "";
        const distro = await getLinuxDistro();
        core.debug("linux distro: [" + distro + "]");
        if (distro === "alpine") {
          // for set -e workaround, we need to install bash because alpine doesn't have it
          await execShellCommand(
            optionalSudoPrefix + "apk add openssh-client xz bash"
          );
        } else if (distro === "arch") {
          // partial upgrades are not supported so also upgrade everything
          await execShellCommand(
            optionalSudoPrefix + "pacman -Syu --noconfirm xz openssh"
          );
        } else if (distro === "fedora") {
          await execShellCommand(
            optionalSudoPrefix + "dnf install -y xz openssh"
          );
        } else {
          await execShellCommand(optionalSudoPrefix + "apt-get update");
          await execShellCommand(
            optionalSudoPrefix + "apt-get install -y openssh-client xz-utils"
          );
        }

        const tmateArch = TMATE_ARCH_MAP[external_os_default().arch()];
        if (!tmateArch) {
          throw new Error(`Unsupported architecture: ${external_os_default().arch()}`);
        }
        const tmateReleaseTar = await tool_cache.downloadTool(
          `https://github.com/tmate-io/tmate/releases/download/${TMATE_LINUX_VERSION}/tmate-${TMATE_LINUX_VERSION}-static-linux-${tmateArch}.tar.xz`
        );
        const tmateDir = external_path_default().join(external_os_default().tmpdir(), "tmate");
        tmateExecutable = external_path_default().join(tmateDir, "tmate");

        if (external_fs_default().existsSync(tmateExecutable)) external_fs_default().unlinkSync(tmateExecutable);
        external_fs_default().mkdirSync(tmateDir, { recursive: true });
        await execShellCommand(
          `tar x -C ${tmateDir} -f ${tmateReleaseTar} --strip-components=1`
        );
        external_fs_default().unlinkSync(tmateReleaseTar);
      }
      core.debug("Installed dependencies successfully");
    }

    if (process.platform === "win32") {
      tmateExecutable = "CHERE_INVOKING=1 tmate";
    } else {
      core.debug("Generating SSH keys");
      external_fs_default().mkdirSync(external_path_default().join(external_os_default().homedir(), ".ssh"), { recursive: true });
      try {
        await execShellCommand(
          `echo -e 'y\n'|ssh-keygen -q -t rsa -N "" -f ~/.ssh/id_rsa`
        );
      } catch {}
      core.debug("Generated SSH-Key successfully");
    }

    let newSessionExtra = "";
    let tmateSSHDashI = "";
    let publicSSHKeysWarning = "";
    const limitAccessToActor = core.getInput("limit-access-to-actor");
    if (limitAccessToActor === "true" || limitAccessToActor === "auto") {
      const { actor, apiUrl } = github.context;
      const auth = core.getInput("github-token");
      const octokit = new rest.Octokit({
        auth,
        baseUrl: apiUrl,
        request: { fetch },
      });
      const keys = await octokit.users.listPublicKeysForUser({
        username: actor,
      });
      if (keys.data.length === 0) {
        if (limitAccessToActor === "auto")
          publicSSHKeysWarning = `No public SSH keys found for ${actor}; continuing without them even if it is less secure (please consider adding an SSH key, see https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)`;
        else
          throw new Error(
            `No public SSH keys registered with ${actor}'s GitHub profile`
          );
      } else {
        const sshPath = external_path_default().join(external_os_default().homedir(), ".ssh");
        await external_fs_default().promises.mkdir(sshPath, { recursive: true });
        const authorizedKeysPath = external_path_default().join(sshPath, "authorized_keys");
        await external_fs_default().promises.writeFile(
          authorizedKeysPath,
          keys.data.map((e) => e.key).join("\n")
        );
        newSessionExtra = `-a "${authorizedKeysPath}"`;
        tmateSSHDashI = "ssh -i <path-to-private-SSH-key>";
      }
    }

    const tmate = `${tmateExecutable} -S /tmp/tmate.sock`;

    // Work around potential `set -e` commands in `~/.profile` (looking at you, `setup-miniconda`!)
    await execShellCommand(`echo 'set +e' >/tmp/tmate.bashrc`);
    let setDefaultCommand = `set-option -g default-command "bash --rcfile /tmp/tmate.bashrc" \\;`;

    // The regexes used here for validation are lenient, i.e. may accept
    // values that are not, strictly speaking, valid, but should be good
    // enough for detecting obvious errors, which is all we want here.
    const options = {
      "tmate-server-host": /^[a-z\d\-]+(\.[a-z\d\-]+)*$/i,
      "tmate-server-port": /^\d{1,5}$/,
      "tmate-server-rsa-fingerprint": /./,
      "tmate-server-ed25519-fingerprint": /./,
    };

    for (const [key, option] of Object.entries(options)) {
      if (core.getInput(key) === "") continue;
      const value = getValidatedInput(key, option);
      if (value !== undefined) {
        setDefaultCommand = `${setDefaultCommand} set-option -g ${key} "${value}" \\;`;
      }
    }

    let namedSessionCommand = "";
    if (
      core.getInput("named-session-name") &&
      core.getInput("named-session-api-key")
    ) {
      namedSessionCommand = `-k ${core.getInput(
        "named-session-api-key"
      )} -n ${core.getInput("named-session-name")}`;
    }

    core.debug("Creating new session");
    await execShellCommand(
      `${tmate} ${namedSessionCommand} ${newSessionExtra} ${setDefaultCommand} new-session -d`
    );
    await execShellCommand(`${tmate} wait tmate-ready`);
    core.debug("Created new session successfully");

    core.debug("Fetching connection strings");
    const tmateSSH = await execShellCommand(
      `${tmate} display -p '#{tmate_ssh}'`
    );
    const tmateWeb = await execShellCommand(
      `${tmate} display -p '#{tmate_web}'`
    );

    // Ref: https://github.com/LouisBrunner/checks-action/blob/main/src/main.ts
    core.debug("Attaching SSH info to github check");
    const ownership = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
    };
    const authToken = core.getInput("github-token");
    let runCheckID = "";
    if (authToken) {
      const octokit = github.getOctokit(authToken);
      const sha = getSHA();
      core.debug(
        `Creating a new Run on ${ownership.owner}/${ownership.repo}@${sha}`
      );
      const checkName = tmateSSH;
      runCheckID = await createRun(octokit, checkName, sha, ownership, {
        status: "in_progress",
        output: {
          summary: `ActionDebugger SSH URL: \`${tmateSSH}\``,
        },
      });
      core.debug(
        `Created a new Run on ${ownership.owner}/${ownership.repo} with id ${runCheckID}`
      );
    }

    /*
     * Publish a variable so that when the POST action runs, it can determine
     * it should run the appropriate logic. This is necessary since we don't
     * have a separate entry point.
     *
     * Inspired by https://github.com/actions/checkout/blob/v3.1.0/src/state-helper.ts#L56-L60
     */
    core.saveState("isPost", "true");

    const detached = core.getInput("detached");
    if (detached === "true") {
      core.debug("Entering detached mode");

      let message = "";
      if (publicSSHKeysWarning) {
        message += `::warning::${publicSSHKeysWarning}\n`;
      }
      if (tmateWeb) {
        message += `::notice::Web shell: ${tmateWeb}\n`;
      }
      message += `::notice::SSH: ${tmateSSH}\n`;
      if (tmateSSHDashI) {
        message += `::notice::or: ${tmateSSH.replace(/^ssh/, tmateSSHDashI)}\n`;
      }
      core.saveState("message", message);
      core.saveState("tmate", tmate);
      core.saveState("authToken", authToken);
      core.saveState("runCheckID", runCheckID);
      return;
    }

    core.debug("Entering main loop");
    while (true) {
      if (publicSSHKeysWarning) {
        core.warning(publicSSHKeysWarning);
      }
      if (tmateWeb) {
        core.info(`Web shell: ${tmateWeb}`);
      }
      core.info(`SSH: ${tmateSSH}`);
      if (tmateSSHDashI) {
        core.info(`or: ${tmateSSH.replace(/^ssh/, tmateSSHDashI)}`);
      }

      if (continueFileExists()) {
        core.info(
          "Exiting debugging session because the continue file was created"
        );
        await updateRunCheckPostTmateDisconnect(authToken, runCheckID);
        break;
      }

      if (didTmateQuit()) {
        core.info("Exiting debugging session 'tmate' quit");
        await updateRunCheckPostTmateDisconnect(authToken, runCheckID);
        break;
      }

      await sleep(5000);
    }
  } catch (error) {
    core.setFailed(error);
  }
}

async function updateRunCheckPostTmateDisconnect(authToken, runCheckID) {
  if (authToken && runCheckID) {
    const octokit = github.getOctokit(authToken);
    const ownership = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
    };
    core.debug(
      `Updating a Run on ${ownership.owner}/${ownership.repo} (${runCheckID})`
    );
    await updateRun(octokit, runCheckID, ownership, {
      status: "completed",
      conclusion: "success",
      output: {
        summary: `Thanks for using ActionDebugger. The session has been terminated.`,
      },
    });
  }
}

function didTmateQuit() {
  const tmateSocketPath =
    process.platform === "win32"
      ? "C:/msys64/tmp/tmate.sock"
      : "/tmp/tmate.sock";
  return !external_fs_default().existsSync(tmateSocketPath);
}

function continueFileExists() {
  const continuePath =
    process.platform === "win32" ? "C:/msys64/continue" : "/continue";
  return (
    external_fs_default().existsSync(continuePath) ||
    external_fs_default().existsSync(external_path_default().join(process.env.GITHUB_WORKSPACE, "continue"))
  );
}

;// CONCATENATED MODULE: ./src/main.js


run()
})();

module.exports = __webpack_exports__;
/******/ })()
;