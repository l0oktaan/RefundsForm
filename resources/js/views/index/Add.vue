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
                <div class="btnForm text-left" v-for="(form,index) in forms" :key="form.id">
                    <toggle-button :value="false" :sync="true" :width="70" :height="25"
                        :labels="{checked: 'เลือก', unchecked: 'ไม่เลือก'}"
                        :color="{checked: '#41831b', unchecked: '#7c7c7c'}"
                        style="padding-top:5px;"
                        v-model="arrFormSelected[index]"
                        @change="selectChange(index)"
                        />
                    <span class="float-right txtForm">{{form.name}}</span>
                    
                </div>
            </b-col>
            <b-col>
                <transition-group name="bounce">
                    <div  v-for="(form,index) in forms" :key="index" v-if="isSelected(form)">
                        <div class="btnForm">
                            {{form.name}}
                            <span class='close' @click="removeForm(form)"><i class="fas fa-times"></i></span>
                            <div class="menuEdit" @click="showForm(form)"><i class="fas fa-edit"></i>กรอกแบบฟอร์ม</div>
                        </div>
                        <form-refund :formID="form.id" :show="form.show"></form-refund>
                    </div>
                    
                </transition-group>
                
            </b-col>
        </b-row>
        <p>forms : {{forms}}</p>
        <p>arrFormSelected : {{arrFormSelected}}</p>
        <br>
        <p>arrSelectForm : {{arrSelectForm}}</p>
        
    </b-container>
</template>
<script>
export default {
    data(){
        return {
            pop1: false,
            arrSelectForm:[],
            arrFormSelected:[false,false,false,false,false,false,false,false,false,false],
            forms:[
                {
                    id: 1,
                    name: 'แบบฟอร์มที่ 1',
                    status: '',
                    show: false
                },
                {
                    id: 2,
                    name: 'แบบฟอร์มที่ 2',
                    status: '',
                    show: false
                },
                {
                    id: 3,
                    name: 'แบบฟอร์มที่ 3',
                    status: '',
                    show: false
                },
                {
                    id: 4,
                    name: 'แบบฟอร์มที่ 4',
                    status: '',
                    show: false
                },
                {
                    id: 5,
                    name: 'แบบฟอร์มที่ 5',
                    status: '',
                    show: false
                },
                {
                    id: 6,
                    name: 'แบบฟอร์มที่ 6',
                    status: '',
                    show: false
                },
                {
                    id: 7,
                    name: 'แบบฟอร์มที่ 7',
                    status: '',
                    show: false
                },
                {
                    id: 8,
                    name: 'แบบฟอร์มที่ 8',
                    status: '',
                    show: false
                },
                {
                    id: 9,
                    name: 'แบบฟอร์มที่ 9',
                    status: '',
                    show: false
                },
                {
                    id: 10,
                    name: 'แบบฟอร์มที่ 10',
                    status: '',
                    show: false
                },
            ]
        }
    },
    methods:{
        selectChange(index){
            //this.arrFormSelected[index] = !this.arrFormSelected[index];
            //console.log('form :' + index + ' value :' + this.arrFormSelected[index]);
            if (this.arrFormSelected[index]){
                this.arrSelectForm.push(this.forms[index]);
            }else{
                //this.forms[index].show = false;
                this.removeForm(this.forms[index]);
            }
            this.arrSelectForm = _.orderBy(this.arrSelectForm,'id','asc');
        },
        removeForm(form){
            //console.log('find :' + this.arrSelectForm.find(form => form.id === form.id).index);
            //console.log('find :' + this.arrSelectForm.findIndex(form));
            //console.log('find :' + this.arrSelectForm.indexOf(form));

            this.$swal({
                title: "คุณต้องการลบแบบฟอร์มนี้ออกใช่หรือไม่ ?",
                text: "หากคุณตอบตกลง ข้อมูลที่บันทึกไว้จะถูกลบไปด้วย",
                icon: "warning",
                buttons : ["ยกเลิก", "ยืนยัน"],
                dangerMode: true
            })
            .then((isDelete)=> {
                if (isDelete){
                    const index = this.arrSelectForm.indexOf(form);
                    this.arrSelectForm[index].show = false;
                    this.arrSelectForm.splice(index,1);
                    const indexRemove = form.id - 1;
                    this.arrFormSelected[indexRemove] = false;
                    this.clearShowForm();
                }
                
            });
            
        },
        sortArray(arr){
            return _.orderBy(arr,'id','asc');
        },
        isSelected(form){
            const index = this.arrSelectForm.indexOf(form);
            return index >=0 ? true : false;
        },
        popClick(form){
            //this.$root.$emit('bv::hide::popover');
            this.pop1 = !this.pop1;
        },
        clearShowForm(){
            for (let i=0 ; i < this.arrSelectForm.length ; i++){
                this.arrSelectForm[i].show = false;
            }
        },
        showForm(form){
            this.clearShowForm();
            const index = this.arrSelectForm.indexOf(form);
            if (this.arrSelectForm[index].show==false){
                this.arrSelectForm[index].show = true;
            }
        }
    },
    watch:{
        arrFormSelected(){
            console.log('changed');
        }
    },
    
}
</script>

<style scoped>
h3{
    margin-top: 20px;
    color: #7c7c7c;
}
.btnForm{
    
    border: 1px solid rgb(192, 192, 192);
    border-radius: 3px;
    margin: 10px;
    padding: 10px;
    font-size: 1.2em;
    background-color: #ffffff;
    
}
.vue-js-switch#changed-font {
  font-size: 20px;
}
.menuEdit{
    margin-left: 30px;
    cursor: pointer;
    padding-top: 10px;
}
</style>
