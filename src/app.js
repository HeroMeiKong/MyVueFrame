import Vue from 'vue'
import vm from './vm'
import Icon from './icon'
import vmGroup from './vm-group'

Vue.component('g-vm', vm)
Vue.component('g-icon', Icon)
Vue.component('g-vm-group', vmGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    }
})
//单元测试
import chai from 'chai'

const expect = chai.expect
{
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    vm.$mount('#test')//vm.$mount()也行
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-set')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'set',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)//order =window.getComputedStyle(svg).order
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(vm)
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)//order =window.getComputedStyle(svg).order
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(vm)
    const gvm = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    gvm.$mount()
    gvm.$on('click', function () {
        console.log(1)
    })
    let vm = gvm.$el
    vm.click()
    vm.$el.remove()
    vm.$destroy()
}