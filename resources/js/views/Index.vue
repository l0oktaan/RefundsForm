<template>
    <b-container>
        <b-row class="text-center">
            <b-col>
                <b-card class="boxUser" bg-variant="light text-center"></b-card>
            </b-col>

            <b-col cols="4">
                <b-card bg-variant="light text-center" @click="$router.push('/')" style="cursor:pointer">
                        <p class="card-text"><b-img class="logo" src="/img/cgd_blue.png" fluid /></p>
                        <p class="card-text title">การถอนคืนเงินรายได้แผ่นดิน</p>
                </b-card>
            </b-col>
            
            <b-col>
                <b-card class="boxUser" bg-variant="light text-center"></b-card>
            </b-col>
        </b-row>
        <b-row>
            <router-view></router-view>
        </b-row>
        
    </b-container>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.boxUser{
    height: 100%;
}
.detail{
    margin-top: 30px;
}

.card-body > p{
    margin-top: 20px;
    font-size: 1.4em;
}

</style>
