# Troubleshooting

Use this page when [[appName]] does not launch, cannot use permissions, or fails to run a workflow.

## App Will Not Open

If macOS blocks the app during beta:

1. Open **Applications** in Finder.
2. Control-click or right-click `[[appName]].app`.
3. Choose **Open**.
4. Confirm **Open**.

If that does not work, download a fresh build from [canoryn.app/download](https://canoryn.app/download).

## Microphone Does Not Work

1. Open **System Settings -> Privacy & Security -> Microphone**.
2. Enable [[appName]].
3. Restart [[appName]].

## Screen-Aware Workflows Do Not Work

1. Open **System Settings -> Privacy & Security -> Screen Recording**.
2. Enable [[appName]].
3. Quit and reopen [[appName]].

## App Control Does Not Work

UI automation needs Accessibility permission.

1. Open **System Settings -> Privacy & Security -> Accessibility**.
2. Enable [[appName]].
3. Try the workflow again.

## Local AI Does Not Respond

If you use Ollama:

```bash
ollama list
ollama run llama3.2
```

Confirm the model exists and responds outside [[appName]] first.

## Cloud AI Does Not Respond

Check:

- the provider key is saved correctly,
- the provider account has quota/credits,
- the selected model name is valid,
- your network connection works.

## A Workflow Fails

Try narrowing the workflow:

1. Run one node/action at a time.
2. Check whether a permission prompt is pending.
3. Replace cloud AI nodes with a simple text node to isolate provider issues.
4. Check whether the target app is open and active.

## Still Stuck

Contact support from [canoryn.app/support](https://canoryn.app/support). Include:

- macOS version,
- [[appName]] version,
- what you expected,
- what happened,
- whether you use local AI or a cloud provider.
