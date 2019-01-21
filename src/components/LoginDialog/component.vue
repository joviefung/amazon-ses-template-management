<template>
  <md-dialog
    :md-active="value"
  >
    <md-dialog-title>Login your Amazon SES account</md-dialog-title>
    <md-dialog-content>
      <md-field>
        <label>Access Key ID</label>
        <md-input v-model="accessKeyId" type="password"></md-input>
      </md-field>
      <md-field>
        <label>Secret Access Key</label>
        <md-input v-model="secretAccessKey" type="password"></md-input>
      </md-field>
      <md-field>
        <label>Region</label>
        <md-select v-model="region">
          <md-option 
            v-for="region in regions" 
            :value="region"
            :key="region"
          >{{ region }}</md-option>
        </md-select>
      </md-field>
      <md-checkbox v-model="rememberAccount" class="md-primary">Remember my account</md-checkbox>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button @click="login">Login</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
