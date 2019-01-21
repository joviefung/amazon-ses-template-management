<template>
  <div class="page md-layout">
    <login-dialog
      v-model="showLoginDialog"
    />

    <TemplateList
      v-if="!showLoginDialog"
      ref="templateList"
      class="md-layout-item template-list md-size-30"
      @selectTemplate="templateName => { selectedTemplateName = templateName; showEditTemplate = false; }"
      @createTemplate="showEditTemplate = true"
      @showMessage="e => { message = e; }"
    />
    <TemplateDetails
      v-show="!showLoginDialog && !showEditTemplate"
      ref="templateDetails"
      :template-name="selectedTemplateName"
      class="md-layout-item md-size-70" 
      @edit="template => { selectedTemplate = template; showEditTemplate = true; }"
      @change="refreshTemplate(true)"
      @showMessage="e => { message = e; }"
    />
    <EditTemplateDetails
      v-show="!showLoginDialog && showEditTemplate"
      :is-visible="showEditTemplate"
      :template="selectedTemplate"
      class="md-layout-item md-size-70" 
      @cancel="showEditTemplate = false; selectedTemplate = null;"
      @change="refreshTemplate"
      @showMessage="e => { message = e; }"
    />

    <md-snackbar 
      :md-active.sync="showSnackbar" 
      md-position="left"
    >
      <span>{{ message }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
