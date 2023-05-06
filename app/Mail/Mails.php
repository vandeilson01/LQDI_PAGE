<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Contracts\Queue\ShouldQueue;

class Mails extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public $codId,public $name,public $email,public $subject,public $content,public $file,)
    {
        //
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: $this->subject,
            // cc: [$this->email],
            // bcc: ['testreceiver-bcc@gmail.com']
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'mail.mails',
            with: [
                'name' => $this->name,
                'content' => $this->content,
                'email' => $this->email,
                'codId' => $this->codId,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    


     public function attachments()
     {

        if(!empty($this->file)){
            return [
                Attachment::fromPath($this->file),
            ];
        }
      
 
     }
}
