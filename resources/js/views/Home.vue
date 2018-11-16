<template>
    <div>
        <b-container>
            <b-row class="justify-content-md-center">
                <b-col col lg="2"></b-col>
                <b-col cols="12" md="auto">
                    <b-card bg-variant="light text-center">
                        <p class="card-text"><b-img class="logo" src="/img/cgd_blue.png" fluid /></p>
                        <p class="card-text title">การถอนคืนเงินรายได้แผ่นดิน</p>
                        <transition name="fade">
                        <div v-if="isFirst">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control text-center" placeholder="เลขรหัสงบประมาณ">                    
                            </div>
                            <button type="button" class="btn btn-primary btn-block" @click="isFirst=false">ดำเนินการต่อ</button>
                        </div>
                        </transition>
                        <transition name="fade">
                        <div v-if="!isFirst">
                            <p class="text-center">กรมควบคุมมลพิษ</p>
                            <button type="button" class="btn btn-primary btn-block" @click="toIndex()">ยืนยันข้อมูล</button>
                        </div>
                        </transition>
                    </b-card> 
                </b-col>
                <b-col col lg="2"></b-col>
            </b-row>
            
        </b-container> 
    </div>
       
</template>
<script>
export default {
    data(){
        return{
            isFirst: true
        }
    },
    methods: {
        toIndex(){
            this.isFirst = false;
            this.$router.push('index');
        }
    }
}
</script>

<style scoped>
.centered {
   position: fixed;
  top: 40%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  
}

.card{
    padding: 30px!important;
    margin-top: 100px;
    margin-bottom: 30px;
    width: 350px!important;
    box-shadow: 0px 0px 20px -2px rgba(11, 36, 59, 0.75);
    
}


#budgetid{
    width: 450px;
}

</style>
