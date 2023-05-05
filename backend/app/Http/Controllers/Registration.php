<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\RegistrationRequest;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Registration;
use App\Models\User;
use App\Mail\Mails;
use App\Models\MailsPlus;
use App\Models\RegistrationModel;
use App\Models\MailModel;
use App\Mail\WelcomeMail;


class Registration extends Controller
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


    public function file(Request $request)
    {

        if($request->file){

            $fileName = Str::random().'.'.$request->file->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('/files', $request->file,$fileName);

            return response()->json([
                'message'=>'Arquivo salvo!',
                'name' =>  $fileName,
            ], 201);
        }else{
            return response()->json([
                'message'=>'Sem imagem!',
            ], 402);
        }

    }
    public function store(RegistrationRequest $request)
    {


        //validando nome e email
        $validated = $request->validated();
 
        $create = RegistrationModel::create([
            'cod_id' => md5(time()).rand(),
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'content' => $request->content,
            'file' => $request->file ?? '',
        ]);

        $codId = $create->cod_id;
        $name = $create->name;
        $email = $create->email;
        $subject = $create->subject;
        $content = $create->content;
        $file =  $create->file;

        if($create){

            //enviando email de inscrição
            Mail::to('endereco@email.com')->send(new Mails(
                $codId,
                $name,
                $email,
                $subject,
                $content,
                $file,
            ));

            //retorno para o usuario
            $data = [
                'cod_id' => $create->cod_id,
                'name' => $create->name,
                'email' => $create->email,
            ];

            // return $data;
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
