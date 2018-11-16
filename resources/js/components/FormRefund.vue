<template>
    
    <div>
        <b-card bg-variant="light">
            <form action="">
                <b-container>
                    <b-row>
                        <b-col>

                        </b-col>
                    </b-row>
                </b-container>
            </form>
        </b-card>
    </div>
</template>
<script>
export default {
    props: ['form','show'],
    data(){
        return{
            refunds:[
                {
                    id: 1,
                    office_id: '1111111111',
                    approve_code: '',
                    status: 1,
                    create_date: '',
                    send_date: '',
                    complete_date: ''
                }
            ],
            contract: [
                {
                    id: 1,
                    refund_id: 1,          
                    name: 'ตามมติคณะรัฐมนตรี เมื่อวันที่ 8 สิงหาคม 2560',
                    contract_party : 'บริษัท xxxxxx จำกัด',
                    contract_no : '12344321',
                    contract_date : '1/1/2561',
                    budget : 2000000,
                    penalty_per_day : 1000,
                    contract_start : '1/1/2561',
                    contract_end : '31/12/2563'                    
                }
            ],
            contractEdit:[
                {
                    id: 1,
                    contract_id: 1,
                    order: 1,
                    budget : 2500000,
                    penalty : 1000,
                    contractEditDate : '31/10/2561'
                },
                {
                    id: 2,
                    contract_id: 1,
                    order: 2,
                    budget : 2800000,
                    penalty : 2000,
                    contractEditDate : '1/12/2561'
                }
            ],
            approveContractEdit:[
                {
                    id: 1,

                    order: 1,
                    approve_date: '',
                    type: '',
                    detail: '',
                    days: 200
                }
            ],
            rules: [
                {
                    id: 1,
                    form_id: 9,
                    order: 1,
                    name: 'เป็นการให้ความช่วยเหลือผู้ประกอบการก่อสร้างในภาคใต้ที่ได้รับผลกระทบจากเหตุอุทกภัยที่เกิดขึ้นในช่วงระหว่างวันที่ 1 ธ.ค. 59 ถึงวันที่ 12 ก.พ. 60',
                    consider: 'เป็นสัญญาจ้างก่อสร้าง'
                },
                {
                    id: 2,
                    form_id: 9,
                    order: 2,
                    name: 'อยู่ในพื้นที่ภาคใต้ 2 จังหวัด ได้แก่ พังงา และภูเก็ต',
                    consider: 'อยู่ในภาคใต้ 2 จังหวัด'
                },
                {                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    id: 3,
                    form_id: 9,
                    order: 3.1,
                    name: 'ลงนามก่อน 1 ธ.ค. 59',
                    consider: 'ลงนามก่อน 1 ธ.ค. 59'
                },
                {
                    id: 4,
                    form_id: 9,
                    order: 3.2,
                    name: 'ลงนามระหว่าง 1 ธ.ค. 59 - 12 ก.พ. 60',
                    consider: 'ลงนามระหว่าง 1 ธ.ค. 59 - 12 ก.พ. 60'
                },
                
            ]
            
        }
    }
}
</script>
