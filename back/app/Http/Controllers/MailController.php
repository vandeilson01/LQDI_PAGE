<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\MailsPlus;
use App\Http\Requests\MailRequest;
use Illuminate\Support\Facades\Storage;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MailRequest $request)
    {


        //validando nome e email
        $validated = $request->validated();
 
        $create = MailsPlus::create([
            'cod_id' => md5(time()).rand(),
            'email' => $request->email,
        ]);

        if($create){
            
            $data = [
                'cod_id' => $create->cod_id,
                'email' => $create->email,
            ];

            Storage::disk('public')->put('mails/'.$create->cod_id.'.json', json_encode($data));

            return response()->json([
                'message' => 'Enviado com successo!',
                'data' => $data,
            ], 201);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
