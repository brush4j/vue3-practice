<template>
  <!-- 务必看懂下面这一行代码 -->
  <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2> -->
  
  <Person a="哈哈" @select="handleSelect" :list="personList"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {reactive} from 'vue'
  import {type Persons} from '@/types'

  let x = 9

  let personList = reactive<Persons>([
    {id:'asudfysafd01',name:'张三',age:18},
    {id:'asudfysafd02',name:'李四',age:20},
    {id:'asudfysaf)d03',name:'王五',age:22}
  ])

  function handleSelect(person: { id: string; name: string; age: number }) {
  // 这里可以处理选中的person
  console.log('选中：', person)
}

</script>
