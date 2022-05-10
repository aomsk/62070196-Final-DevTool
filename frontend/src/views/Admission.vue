<template>
    <div>
        <h2>ระบบรับสมัครนักศึกษาระดับปริญญาเอก</h2>
        <h2>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</h2>
        <h4 class="text-center m-5">ค้นหาหลักสูตร</h4>

        <div class>
            <div class="row">
                <div class="col-lg-6">
                    <div class="dropdown d-grid gap-2">
                        <h6>ค้นหา 'คณะ'</h6>
                        <button
                            class="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >ค้นหา'คณะ'</button>
                        <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown d-grid gap-2">
                        <h6>ค้นหา 'โครงการ'</h6>
                        <button
                            class="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >ค้นหา 'โครงการ'</button>
                        <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="dropdown d-grid gap-2">
                        <h6>ค้นหา 'รอบรับสมัคร'</h6>
                        <button
                            class="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >ค้นหา 'รอบรับสมัคร'</button>
                        <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
                            <li v-for="(item, index) in rounds" :key="index">
                                <a
                                    class="dropdown-item"
                                    @click="searchByRound(item.roundName)"
                                >{{ item.roundName }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown d-grid gap-2">
                        <h6>ค้นหาหลักสูตร ไทย / นานาชาติ</h6>
                        <button
                            class="btn btn-light dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >ค้นหาหลักสูตร ไทย / นานาชาติ</button>
                        <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton1">
                            <li v-for="(item, index) in courses" :key="index">
                                <a
                                    class="dropdown-item"
                                    @click="searchByCourse(item.coursName)"
                                >{{ item.coursName }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            courses: "",
            rounds: ""
        }
    },
    created() {
        axios.get('http://localhost:3000/course').then(response => {
            console.log(response.data.courses);
            this.courses = response.data.courses
        }).catch(error => {
            console.log(error);
        })

        axios.get('http://localhost:3000/round').then(response => {
            console.log(response.data.rounds);
            this.rounds = response.data.rounds
        }).catch(error => {
            console.log(error);
        })
    },
    methods: {
        searchByCourse(courseName) {
            console.log('courseName : ', courseName);
        }
    }
}
</script>

<style>
</style>