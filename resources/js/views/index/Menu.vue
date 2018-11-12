<template>
    <b-container>
        <b-row class="text-center detail">
            <b-col></b-col>
            <b-col cols="8">
                <b-button variant="outline-success" class="menu" @click="toAdd">
                    <i class="fas fa-plus-circle fa-7x"></i>
                    <p>เพิ่มรายการขอคืนเงิน</p>
                </b-button>
                <b-button variant="outline-primary"  class="menu" @click="toList">
                    <i class="fas fa-list-ul fa-7x"></i>
                    <p>ตรวจสอบรายการย้อนหลัง</p>
                </b-button>                
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        toAdd(){
            this.$router.push({name:'add'});
        },
        toList(){
            this.$router.push({name:'list'});
        }
    }
}
</script>

<style scoped>
.menu{
    width: 220px;
    margin: 15px;
    padding: 15px;
}
.menu > p{
    margin-top: 20px;
    font-size: 1.2em;
}
</style>
