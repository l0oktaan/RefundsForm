<template>
    <h3 v-if="show">Refund Form : {{formID}}</h3>
</template>
<script>
export default {
    props: ['formID','show']
}
</script>
