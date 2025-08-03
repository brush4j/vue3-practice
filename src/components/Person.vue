<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">
        {{p.name}} -- {{p.age}}
      </li>
    </ul>
    <button @click="emit('select', {id: '123', name: '张三', age: 18})">选择</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {withDefaults} from 'vue'
  import {type Persons} from '@/types'

  // 只接收list
  // defineProps(['list'])

  // 接收list + 限制类型
  // defineProps<{list:Persons}>()

  // 接收list，同时将props保存起来
  /* let x = defineProps(['list'])
  console.log(x.list) */

  //  接收list + 限制类型 + 限制必要性 + 指定默认值
  const props = withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [{id:'ausydgyu01',name:'康师傅·王麻子·特仑苏',age:19}]
  })

  console.log('收到的list:', props.list)

  debugger;

    // 定义emit
  const emit = defineEmits<{
    (e: 'select', person: { id: string; name: string; age: number }): void
  }>()
  
  let list = ['a', 'b', 'c']

  const b = list.some((item) => {
    console.log(item)
    return item === 'b'
  })
  console.log('是否存在b:', b)


</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>