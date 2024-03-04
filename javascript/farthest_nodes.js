// * Using the JavaScript language, have the function farthestNodes(strArr) read
//  * strArr which will be an array of hyphenated letters representing paths
//  * between those two nodes. For example: ["a-b","b-c","b-d"] means that there is
//  * a path from node a to b (and b to a), b to c, and b to d. Your program should
//  * determine the longest path that exists in the graph and return the length of
//  * that path. So for the example above, your program should return 2 because of
//  * the paths a-b-c and d-b-c. The path a-b-c also means that there is a path
//  * c-b-a. No cycles will exist in the graph and every node will be connected to
//  * some other node in the graph.
 

function farthestpath(strArr)
{
const graph={};

//buit graph for input array
    strArr.forEach(path => {

        const[start,end]=path.split('-');
        console.log(start,end);

        if(!graph[start]) graph[start]=[];
        graph[start].push(end);

        console.log(graph[start]);

        if(!graph[end]) graph[end]=[];
        graph[end].push(start);

        console.log(graph[start]);


    });

    let longpathlength=0;
    
    function dfs(node,visit,currentlength)
    {
        visit.add(node);
        longpathlength=Math.max(longpathlength,currentlength);
        console.log(longpathlength);

        for(let n of graph[node])
        {
            if(!visit.has(n))
            {
                dfs(n,new Set(visit),currentlength+1);
            }
        }
    }

    Object.keys(graph).forEach(node=>{
        dfs(node,new Set,0);
    });
return longpathlength;

}
console.log(farthestpath(["a-b","b-c","b-d"]));