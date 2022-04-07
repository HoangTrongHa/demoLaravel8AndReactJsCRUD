<?php

namespace App\Traits;

trait ResponseFormat {
    public function responseSuccess($data=null,$message=null,$code=200){
        return response()->json([
            'status' 	=> 'success',
            'message' 	=> $message ?? 'Thành công',
            'data' 		=> $data,
            'code'      => $code
        ], $code);
    }

    public function responseFail($data=null,$message=null,$errors=null,$code=400){
        return response()->json([
            'status' 	=> 'fail',
            'message' 	=> $message,
            'errors'    => $errors,
            'data' 		=> $data,
            'code'      => $code
        ], $code);
    }

    public function responseJson($code, $message=null, $data=null, $httpStatus = 200){
        return response()->json([
            'status' 	=> $code,
            'message' 	=> $message,
            'data' 		=> $data
        ], $httpStatus);
    }
}
