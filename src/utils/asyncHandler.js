
const asyncHandler = function (requestHandler){
    return async(req,res,next)=>{
        try {
            await requestHandler(req,res,next);
            
        } catch (error) {


            
        }
    }
}

export {asyncHandler}










// const asyncHandler = (requestHandler)=>{
//    (req,res,next)=>{
   
//         Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
//     }

// }



//using async

// export const asyncHandler2 = (func)=>async(req,res,next)=>{
    
    //     try {
        //         await func(req,res,next)
        
        //     } catch (error) {
            //         res.status(err.code || 500).json({
                //             success:false,
                //             message:err.message
                //         })
                
                //     }
                
                
                // }




