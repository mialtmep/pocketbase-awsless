<script>
    import { slide } from "svelte/transition";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { pageTitle } from "@/stores/app";
    import { setErrors } from "@/stores/errors";
    import { removeAllToasts, addWarningToast, addSuccessToast } from "@/stores/toasts";
    import tooltip from "@/actions/tooltip";
    import PageWrapper from "@/components/base/PageWrapper.svelte";
    import SettingsSidebar from "@/components/settings/SettingsSidebar.svelte";

    $pageTitle = "Files storage";

    const testRequestKey = "s3_test_request";

    let originalFormSettings = {};
    let formSettings = {};
    let isLoading = false;
    let isSaving = false;
    let isTesting = false;
    let testError = null;

    $: initialHash = JSON.stringify(originalFormSettings);

    $: hasChanges = initialHash != JSON.stringify(formSettings);

    loadSettings();

    async function loadSettings() {
        isLoading = true;

        try {
            const settings = (await ApiClient.settings.getAll()) || {};
            init(settings);
        } catch (err) {
            ApiClient.error(err);
        }

        isLoading = false;
    }

    async function save() {
        if (isSaving || !hasChanges) {
            return;
        }

        isSaving = true;

        try {
            ApiClient.cancelRequest(testRequestKey);
            const settings = await ApiClient.settings.update(CommonHelper.filterRedactedProps(formSettings));
            setErrors({});

            await init(settings);

            removeAllToasts();

            if (testError) {
                addWarningToast("Successfully saved but failed to establish S3 connection.");
            } else {
                addSuccessToast("Successfully saved files storage settings.");
            }
        } catch (err) {
            ApiClient.error(err);
        }

        isSaving = false;
    }

    async function init(settings = {}) {
        formSettings = {
            s3: settings?.s3 || {},
        };

        originalFormSettings = JSON.parse(JSON.stringify(formSettings));
    }

    async function reset() {
        formSettings = JSON.parse(JSON.stringify(originalFormSettings || {}));
    }
</script>

<SettingsSidebar />

<PageWrapper>
    <header class="page-header">
        <nav class="breadcrumbs">
            <div class="breadcrumb-item">Settings</div>
            <div class="breadcrumb-item">{$pageTitle}</div>
        </nav>
    </header>

    <div class="wrapper">
        <form class="panel" autocomplete="off" on:submit|preventDefault={() => save()}>
            <div class="content txt-xl m-b-base">
                <p>By default PocketBase uses the local file system to store uploaded files.</p>
                <p>
                    If you have limited disk space, you could optionally connect to an S3 compatible storage.
                </p>
            </div>

            {#if isLoading}
                <div class="loader" />
            {:else}
                <div class="flex">
                    <div class="flex-fill" />

                    {#if formSettings.s3?.enabled && !hasChanges && !isSaving}
                        {#if isTesting}
                            <span class="loader loader-sm" />
                        {:else if testError}
                            <div
                                class="label label-sm label-warning entrance-right"
                                use:tooltip={testError.data?.message}
                            >
                                <i class="ri-error-warning-line txt-warning" />
                                <span class="txt">Failed to establish S3 connection</span>
                            </div>
                        {:else}
                            <div class="label label-sm label-success entrance-right">
                                <i class="ri-checkbox-circle-line txt-success" />
                                <span class="txt">S3 connected successfully</span>
                            </div>
                        {/if}
                    {/if}

                    {#if hasChanges}
                        <button
                            type="button"
                            class="btn btn-transparent btn-hint"
                            disabled={isSaving}
                            on:click={() => reset()}
                        >
                            <span class="txt">Reset</span>
                        </button>
                    {/if}

                    <button
                        type="submit"
                        class="btn btn-expanded"
                        class:btn-loading={isSaving}
                        disabled={!hasChanges || isSaving}
                        on:click={() => save()}
                    >
                        <span class="txt">Save changes</span>
                    </button>
                </div>
            {/if}
        </form>
    </div>
</PageWrapper>
