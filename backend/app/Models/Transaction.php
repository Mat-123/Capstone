<?php

namespace App\Models;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'id_crypto', 'quantity', 'transaction_price', 'total_spent', 'transaction_date', 'transaction_type', 'wallet'];

    public $timestamps = false;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class, 'id_crypto', 'id_crypto');
    }
}
