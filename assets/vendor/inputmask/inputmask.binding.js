!function(a,t,n){a(n.document).ajaxComplete(function(n,i,m){-1!==a.inArray("html",m.dataTypes)&&a(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias], [data-inputmask-regex]").each(function(a,n){void 0===n.inputmask&&t().mask(n)})}).ready(function(){a(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias],[data-inputmask-regex]").each(function(a,n){void 0===n.inputmask&&t().mask(n)})})}(jQuery,window.Inputmask,window);