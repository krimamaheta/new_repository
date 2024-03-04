//a-b-c and d-b-c

function farthest_node(strArr)
{
    let graph={};

    strArr.forEach(path=> {

        let [start,end]=path.split('-');
        console.log(start,end);

        if(!graph[start]) graph[start]=[];
        graph[start].push(end);
        console.log(graph[start]);

         if(!graph[end])graph[end]=[];
        graph[end].push(start);
        console.log(graph[end]);

        
    });

    let longpath=0;

    function dfs(node,visit,currentpath)
    {
        visit.add(node);
        longpath=Math.max(longpath,currentpath);

        for(let n of graph[node])
        {
            if(!visit.has(n))
            {
                dfs(n,new Set(visit),currentpath+1);
            }
        }
    }

    Object.keys(graph).forEach(node=>{
         dfs(node,new Set(),0);
    });
        return longpath;
}
console.log(farthest_node(["a-b","b-c","b-d"]))