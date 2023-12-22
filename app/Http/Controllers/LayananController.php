<?php

namespace App\Http\Controllers;

use App\Models\Layanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use Cloudinary\Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class LayananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Layanan/Index', [
            'title' => 'Layanan',
            'layanan' => Layanan::all(),
        ]);
    }

    public function data() {
        $data = Layanan::get();
        // dd($data);
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Layanan/Add', [
            'title' => 'Tambah Layanan',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Layanan::create([
            'namaLayanan' => $request->namaLayanan,
            'deskripsi' => $request->deskripsi,
            'hrgTerrendah' => $request->hrgTerrendah,
            'hrgTertinggi' => $request->hrgTertinggi,
            'imgName' => $request->imgName,
            'imgUrl' => $request->imgUrl,
            'videoName' => $request->videoName,
            'videoUrl' => $request->videoUrl,
        ]);

        // return response()->json(['data' => 'Berhasil menambah']);
        return redirect('/admin/layanan')->with(['data' => 'Berhasil menambah']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Layanan $layanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Layanan $layanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Layanan $layanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Layanan $layanan)
    {
        Cloudinary::destroy($layanan->imgName);
        Cloudinary::destroy($layanan->videoName, ["resource_type" => "video"]);
        $layanan->delete();
        // return response()->json(['data' => 'Berhasil menghapus']);
        return redirect('/admin/layanan')->with(['data' => 'Berhasil menghapus']);
    }
}
