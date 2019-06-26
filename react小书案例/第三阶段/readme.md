# 高阶组件  
对于高阶组件，他们的需求有着一个相同的逻辑。把这样的逻辑用一个组件包裹了起来。  
高阶组件的作用就是为了组件之间的代码复用，高阶组件内部的包装组件和被包装组件之间通过props传递数据，其实就是装饰者模式。

# React.js的context
类似与全局变量，可以往下传递，但不能向上传递。
	 总结

# smart组件vsdumb组件  
组件划分原则：如果产品场景并没有要求说Content需要复用，它只是在特定业务需要而已，那就没必要做成Dumb组件。  
Content可复用：  
如果产品场景要求Content可能会被复用，那么Content就要是Dumb的，那么Content的之下的子组件ThemeSwitch就一定要Dumb，否则Content就没法复用了。这意味着ThemeSwitch
不能connect，即使你connect了，Content也不能使用你connect的结果，因为connect的结果是个Smart组件。  
这时候ThemeSwitch的数据、onSwitchColor函数只能通过它的父组件传进来，而不是通过connect的结果获得，所以只能让Content组件去connect，然后让它把数据、函数传给ThemeSwitch.