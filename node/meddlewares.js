// middleware pattern (chain of responsability)
const passo1 = (ctx, next) =>{
    ctx.valor1='mid1'
    next()
}
const passo2 = (ctx, next) =>{
    ctx.valor2 ='mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
        middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx ={}
exec(ctx, passo1, passo2, passo3) //Posso trocar os passos, porem se executar o passo 3 primeiro ele não executa os outros passo pois ele não executa a função next
console.log(ctx)