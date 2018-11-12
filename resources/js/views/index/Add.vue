<template>
    <b-container>
        <b-row class="text-center detail">
            <b-col></b-col>
            <b-col cols="8">
                <h3>เพิ่มรายการถอนคืนเงินแผ่นดิน</h3>             
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row>
            <b-col cols="3">
                <div class="btnForm" v-for="form in forms" :key="form.id">
                    <toggle-button :value="false" :sync="true" :labels="true"/>
                    {{form.name}}
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data(){
        return {
            forms:[
                {
                    id: 1,
                    name: 'แบบฟอร์มที่ 1'
                },
                {
                    id: 2,
                    name: 'แบบฟอร์มที่ 2'
                },
                {
                    id: 3,
                    name: 'แบบฟอร์มที่ 3'
                },
                {
                    id: 4,
                    name: 'แบบฟอร์มที่ 4'
                },
                {
                    id: 5,
                    name: 'แบบฟอร์มที่ 5'
                },
                {
                    id: 6,
                    name: 'แบบฟอร์มที่ 6'
                },
                {
                    id: 7,
                    name: 'แบบฟอร์มที่ 7'
                },
                {
                    id: 8,
                    name: 'แบบฟอร์มที่ 8'
                },
                {
                    id: 9,
                    name: 'แบบฟอร์มที่ 9'
                },
                {
                    id: 10,
                    name: 'แบบฟอร์มที่ 10'
                },
            ]
        }
    }
}
</script>

<style scoped>
h3{
    margin-top: 20px;
}
.btnForm{
    text-align: center;
    border: 1px solid #333;
    border-radius: 3px;
    margin: 10px;
    padding: 5px;
}
</style>
