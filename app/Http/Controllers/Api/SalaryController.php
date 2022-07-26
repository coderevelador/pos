<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class SalaryController extends Controller
{
    public function paid(Request $request, $id){
        $ValidateData = $request->validate([
            'salary_month' => 'required',
        ]);

        $month = $request->salary_month;
        $check = DB::table('salaries')->where('empoyee_id',$id)->where('salary_month',$month)->first();
        if($check){
            return response()->json('Salary Already Paid');
        }else{
            $data = array();
            $data['empoyee_id'] = $id;
            $data['amount'] = $request->salary;
            $data['salary_date'] = date('d/m/y');
            $data['salary_month'] = $month;
            $data['salary_year'] = date('Y');
            DB::table('salaries')->insert($data);
            
        }
    }
    public function allSalary(){
        $salary =DB::table('salaries')->select('salary_month')->groupBy('salary_month')->get();
        return response()->json($salary);
    }

    public function ViewSalary($id){
        $month =$id;
        $view = DB::table('salaries')
                        ->join('employees','salaries.empoyee_id','employees.id')
                        ->select('employees.name','salaries.*')
                        ->where('salaries.salary_month', $month)
                        ->get();
                        return response()->json($view);

    }
    public function EditSalary($id){
        $view = DB::table('salaries')
                    ->join('employees','salaries.empoyee_id','employees.id')
                    ->select('employees.name','employees.email','salaries.*')
                    ->where('salaries.id', $id)
                    ->first();
                    return response()->json($view);
    }

    public function SalaryUpdate(Request $request,$id){
        $data = array();
        $data['empoyee_id'] = $request->empoyee_id;
        $data['amount'] = $request->amount;
        $current = $data['salary_month'] = $request->salary_month;

        $check = DB::table('salaries')->where('salary_month', $current)->first();

        if( $check ){
            return response()->json('Selected Month Salary Already Exists!');
        }else{
            DB::table('salaries')->where('id',$id)->update($data);
        }


        
    }
}
